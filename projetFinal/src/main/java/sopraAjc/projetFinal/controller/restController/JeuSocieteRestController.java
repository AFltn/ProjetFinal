package sopraAjc.projetFinal.controller.restController;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.JeuSociete;
import sopraAjc.projetFinal.entities.views.Views;
import sopraAjc.projetFinal.exceptions.JeuSocieteException;
import sopraAjc.projetFinal.exceptions.rest.JeuSocieteInvalidException;
import sopraAjc.projetFinal.services.JeuSocieteService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/jeuxSociete")
public class JeuSocieteRestController {

	private Logger logger = LoggerFactory.getLogger(JeuSocieteRestController.class);

	@Autowired
	private JeuSocieteService JeuSocieteService;


	@GetMapping("")
	@JsonView(Views.ProduitWithAvis.class)
	public List<JeuSociete> getAllJeuSociete() {
		return getAll();
	}



	private List<JeuSociete> getAll() {
		return JeuSocieteService.getAll();
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("")
	public JeuSociete create(@Valid @RequestBody JeuSociete JeuSociete, BindingResult br) {
		System.out.println("js :" + br);
		if (br.hasErrors()) {
			throw new JeuSocieteInvalidException();
		}
		try {
			JeuSociete = JeuSocieteService.save(JeuSociete);
		} catch (Exception e) {
			throw new JeuSocieteInvalidException();
		}
		return JeuSociete;
	}

	@GetMapping("{id}")
	@JsonView(Views.ProduitWithAvis.class)
	public JeuSociete getJeuSocieteById(@PathVariable Integer id) {
		return getById(id);

	}


	private JeuSociete getById(Integer id) {
		JeuSociete p = null;
		try {
			p = JeuSocieteService.getById(id);
		} catch (JeuSocieteException e) {
			throw new JeuSocieteInvalidException();
		}
		return p;
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		JeuSocieteService.delete(id);
	}

	@PutMapping("/{id}")
	public JeuSociete update(@Valid @RequestBody JeuSociete JeuSociete, BindingResult br, @PathVariable Integer id) {
		logger.trace(br.toString());
		if (br.hasErrors()) {
			// System.out.println("binding resut");
			logger.trace("binding result");
			throw new JeuSocieteInvalidException();
		}
		JeuSociete.setId(id);
		try {
			JeuSociete = JeuSocieteService.save(JeuSociete);
		} catch (Exception e) {
			// System.out.println("save");
			logger.trace("save");
			throw new JeuSocieteInvalidException();
		}
		return JeuSociete;
	}

	@PatchMapping("/{id}")
	public JeuSociete update(@RequestBody Map<String, Object> fields, @PathVariable Integer id) {
		try {
			System.out.println(fields);
			final JeuSociete JeuSocieteEnBase = JeuSocieteService.getById(id);
			fields.forEach((key, value) -> {
				Field field = ReflectionUtils.findField(JeuSociete.class, key);
				ReflectionUtils.makeAccessible(field);
				if (key.equals("fournisseur")) {
					System.out.println(((Map) value).get("id"));
//					Fournisseur frs = new Fournisseur();
//					((Map<String, Object>) value).forEach((k, v) -> {
//						Field fieldFrs = ReflectionUtils.findField(Fournisseur.class, k);
//						ReflectionUtils.makeAccessible(fieldFrs);
//						System.out.println(v);
//						ReflectionUtils.setField(fieldFrs, frs, v);

//						if (k.equals("id")) {
//							JeuVideoEnBase.setFournisseur(fournisseurService.getById(Integer.parseInt(v.toString())));
//						}
//					});
					// JeuVideoEnBase.setFournisseur(frs);
				} else {
					ReflectionUtils.setField(field, JeuSocieteEnBase, value);
				}
			});
			JeuSocieteService.save(JeuSocieteEnBase);
			return JeuSocieteEnBase;
		} catch (Exception e) {
			e.printStackTrace();
			throw new JeuSocieteInvalidException();
		}

	}
}

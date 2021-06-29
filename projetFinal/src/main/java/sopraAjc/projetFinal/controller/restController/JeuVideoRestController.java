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

//import sopraAjc.projetFinal.entities.Fournisseur;
import sopraAjc.projetFinal.entities.JeuVideo;
import sopraAjc.projetFinal.entities.views.Views;
import sopraAjc.projetFinal.exceptions.JeuVideoException;
import sopraAjc.projetFinal.exceptions.rest.JeuVideoInvalidException;
import sopraAjc.projetFinal.services.JeuVideoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/jeuxVideo")
public class JeuVideoRestController {

	private Logger logger = LoggerFactory.getLogger(JeuVideoRestController.class);

	@Autowired
	private JeuVideoService JeuVideoService;
//	@Autowired
//	private FournisseurService fournisseurService;

	@GetMapping("")
	@JsonView(Views.Common.class)
	public List<JeuVideo> getAllJeuxVideo() {
		return getAll();
	}

//	@GetMapping("/fournisseur")
//	@JsonView(Views.JeuVideoWithFournisseur.class)
//	public List<JeuVideo> getAllJeuVideoWithFournisseur() {
//		return getAll();
//	}

	private List<JeuVideo> getAll() {
		return JeuVideoService.getAll();
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("")
//	@JsonView(Views.JeuVideoWithFournisseur.class)
	public JeuVideo create(@Valid @RequestBody JeuVideo JeuVideo, BindingResult br) {
		if (br.hasErrors()) {
			throw new JeuVideoInvalidException();
		}
		try {
			JeuVideo = JeuVideoService.save(JeuVideo);
		} catch (Exception e) {
			throw new JeuVideoInvalidException();
		}
		return JeuVideo;
	}

	@GetMapping("{id}")
	@JsonView(Views.Common.class)
	public JeuVideo getJeuVideoById(@PathVariable Integer id) {
		return getById(id);

	}

//	@GetMapping("/{id}/fournisseur")
//	@JsonView(Views.JeuVideoWithFournisseur.class)
//	public JeuVideo getJeuVideoByIdWithFournisseur(@PathVariable Integer id) {
//		return getById(id);
//	}

	private JeuVideo getById(Integer id) {
		JeuVideo p = null;
		try {
			p = JeuVideoService.getById(id);
		} catch (JeuVideoException e) {
			throw new JeuVideoInvalidException();
		}
		return p;
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		JeuVideoService.delete(id);
	}

	@PutMapping("/{id}")
//	@JsonView(Views.JeuVideoWithFournisseur.class)
	public JeuVideo update(@Valid @RequestBody JeuVideo JeuVideo, BindingResult br, @PathVariable Integer id) {
		logger.trace(br.toString());
		if (br.hasErrors()) {
			// System.out.println("binding resut");
			logger.trace("binding result");
			throw new JeuVideoInvalidException();
		}
		JeuVideo.setId(id);
		try {
			JeuVideo = JeuVideoService.save(JeuVideo);
		} catch (Exception e) {
			// System.out.println("save");
			logger.trace("save");
			throw new JeuVideoInvalidException();
		}
		return JeuVideo;
	}

	@PatchMapping("/{id}")
//	@JsonView(Views.JeuVideoWithFournisseur.class)
	public JeuVideo update(@RequestBody Map<String, Object> fields, @PathVariable Integer id) {
		try {
			System.out.println(fields);
			final JeuVideo JeuVideoEnBase = JeuVideoService.getById(id);
			fields.forEach((key, value) -> {
				Field field = ReflectionUtils.findField(JeuVideo.class, key);
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
					ReflectionUtils.setField(field, JeuVideoEnBase, value);
				}
			});
			JeuVideoService.save(JeuVideoEnBase);
			return JeuVideoEnBase;
		} catch (Exception e) {
			e.printStackTrace();
			throw new JeuVideoInvalidException();
		}

	}
}

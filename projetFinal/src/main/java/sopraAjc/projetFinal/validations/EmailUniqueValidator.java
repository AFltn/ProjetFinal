package sopraAjc.projetFinal.validations;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import sopraAjc.projetFinal.services.ClientService;

@Configurable
public class EmailUniqueValidator implements ConstraintValidator<EmailUnique, String> {

	@Autowired
	private ClientService clientService;

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		System.out.println(clientService);
//		if (!value.isEmpty()) {
//			Fournisseur f = frsService.getByContact(value);
//			return f.getId() == null;
//		}
		return true;
	}

}

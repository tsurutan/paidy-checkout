import { ErrorMessages } from 'consts';
import { regexValidator } from 'validators/regexValidator';

export const phoneValidator = regexValidator(/^0[89]0-\d{4}-\d{4}$/, ErrorMessages.INVALID_PHONE);

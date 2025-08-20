import * as enums from '../utils/enums/EnumContatos';

class Contato {
  nomeContato: string;
  tagContato: enums.TagEnum;
  phoneContato: number;
  emailContato: string;
  id: number;

  constructor(
    nomeContato: string,
    tagContato: enums.TagEnum,
    phoneContato: number,
    emailContato: string,
    id: number
  ) {
    this.nomeContato = nomeContato;
    this.tagContato = tagContato;
    this.phoneContato = phoneContato;
    this.emailContato = emailContato;
    this.id = id;
  }
}

export default Contato;

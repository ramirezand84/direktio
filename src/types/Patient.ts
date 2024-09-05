export  interface Patient {
  id: number;
  name: string;
  age: number;
  phone: string;
  gestor: string;
  regime: string;
  ips_name: string;
  status: string;
  gestion: Gestion;
}

interface Gestion {
  gestion_type: string,
  last_contact: Date,
  color: string,
  code: string
}

export type TProvincias = {
  provincia: string;
  governador: {
    nome: string;
    data_nomeacao: string;
  };
  vice_governadores: {
    nome: string;
    cargo: string;
  }[];
  municipios: {
    nome: string;
    comunas: Array<string>;
    distritos: Array<string>;
    data_fundacao: string;
    administrador: string;
  }[];
  informacoes_adicionais: {
    capital: string;
    linguas: Array<string>;
    densidade_populacional: string;
    data_fundacao: string;
    extensao: string;
    etnia: Array<string>;
    numero_municipios: number;
  };
};

interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  children?: Array<Children>;
}
const menu: Array<Menu> = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard"
  },
  {
    path: "/",
    icon: "nav-icon fas fa-database",
    title: "Data Master",
    children: [
      {
        path: "/alunos",
        title: "Alunos"
      },
      {
        path: "/",
        title: "Home"
      }
    ]
  }

];

export default menu;

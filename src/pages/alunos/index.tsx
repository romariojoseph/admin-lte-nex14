import { Card, PanelContent } from "@/components";
import React from "react";

const Alunos = () => {
  return (
    <PanelContent
      title="Alunos"
      menu="Data Master"
      submenu="Alunos"
      headerContent
    >
      <Card title="Alunos">Alunos</Card>
    </PanelContent>
  );
};

export default Alunos;

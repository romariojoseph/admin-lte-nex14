import { Card, PanelContent } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <PanelContent headerContent title="Home">
      <div className="row">
        <div className="col-lg-3">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>Novos Alunos</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link href="/alunos" className="small-box-footer">
              Mais Informações <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
    </PanelContent>
  );
}

package CompanieDeConsultatii.Contabilitate;

import CompanieDeConsultatii.ParteaOficiala.Achizitie;

import java.util.HashMap;
import java.util.Map;

public class Contabilitate {

    private Map<Achizitie, Bon> bonuri = new HashMap<>();

    public Contabilitate() {
    }

    public Contabilitate(Map<Achizitie, Bon> bonuri) {
        this.bonuri = bonuri;
    }

    public void adaugaBon(Achizitie achizitie) {
        bonuri.put(achizitie, new Bon(achizitie));
    }

    public void afiseazaBonuri() {
        for (Achizitie achizitie : bonuri.keySet()) {
            bonuri.get(achizitie).elibereazaBon();

        }
    }
}

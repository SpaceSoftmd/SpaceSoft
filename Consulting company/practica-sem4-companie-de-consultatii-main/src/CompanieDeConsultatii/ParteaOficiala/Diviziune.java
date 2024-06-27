package CompanieDeConsultatii.ParteaOficiala;

import CompanieDeConsultatii.Angajat;

public abstract class Diviziune {
    protected String denumire;
    protected String adresa;
    protected String telefon;
    protected Angajat angajat;

    abstract String afisareDenumire();
}

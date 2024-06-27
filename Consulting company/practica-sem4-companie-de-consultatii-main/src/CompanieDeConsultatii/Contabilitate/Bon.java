package CompanieDeConsultatii.Contabilitate;

import CompanieDeConsultatii.ParteaOficiala.Achizitie;

public class Bon {
    private Achizitie achizitie;

    public Bon(Achizitie achizitie) {
        this.achizitie = achizitie;
    }

    public Achizitie getAchizitie() {
        return achizitie;
    }

    public void setAchizitie(Achizitie achizitie) {
        this.achizitie = achizitie;
    }

    public void elibereazaBon() {
        System.out.println("Denumirea produsului: " + achizitie.getCategorieCheltuieli().getDenumire() +
                "\nData eliberarii: " + achizitie.getDataAchizitiei().getDayOfMonth() +
                "." + achizitie.getDataAchizitiei().getMonthValue() +
                "." + achizitie.getDataAchizitiei().getYear() +
                "\nSuma: " + achizitie.getSuma() + "\n");
    }

    @Override
    public String toString() {
        return "Bon{" +
                "achizitie=" + achizitie +
                '}';
    }
}

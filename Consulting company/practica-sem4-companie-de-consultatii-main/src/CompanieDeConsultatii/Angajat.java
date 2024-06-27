package CompanieDeConsultatii;

import CompanieDeConsultatii.ParteaOficiala.Achizitie;
import CompanieDeConsultatii.ParteaOficiala.Subdiviziune;

import java.util.List;

public class Angajat {
    private String nume;
    private String prenume;

    public Angajat() {
    }

    public Angajat(String nume, String prenume) {
        this.nume = nume;
        this.prenume = prenume;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public void raportAchizitie(Subdiviziune subdiviziune, List<Achizitie> achizitii) {
        System.out.println(this);
        if (achizitii.isEmpty()) {
            System.out.println("Nu am semnat achizitii\n");
        } else {
            int contor = 1;
            for (Achizitie achizitie : achizitii) {
                System.out.println("Raport achizitie -> " + contor +
                        "\n\tCategoria de cheltuieli: " + achizitie.getCategorieCheltuieli().getDenumire() +
                        "\n\tData: " + achizitie.getDataAchizitiei().getDayOfMonth() +
                        "." + achizitie.getDataAchizitiei().getMonthValue() +
                        "." + achizitie.getDataAchizitiei().getYear() +
                        "\n\tSuma: " + achizitie.getSuma() +
                        "\n\tSubdiviziunea: " + subdiviziune.getDenumire() + "\n");
                contor++;
            }
        }
    }

    @Override
    public String toString() {
        return "Angajat{" +
                "nume='" + nume + '\'' +
                ", prenume='" + prenume + '\'' +
                '}';
    }
}

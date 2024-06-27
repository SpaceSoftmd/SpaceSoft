package CompanieDeConsultatii.ParteaOficiala;

import CompanieDeConsultatii.Angajat;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.Scanner;

public class Subdiviziune extends Diviziune {
    Scanner scanner = new Scanner(System.in);

    private LinkedList<Achizitie> achizitii = new LinkedList<>();

    public Subdiviziune() {
    }

    public Subdiviziune(String denumire, String adresa, String telefon) {
        this.denumire = denumire;
        this.adresa = adresa;
        this.telefon = telefon;
    }

    public Subdiviziune(String denumire, String adresa, String telefon, Angajat angajat) {
        this.denumire = denumire;
        this.adresa = adresa;
        this.telefon = telefon;
        this.angajat = angajat;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public Angajat getAngajat() {
        return angajat;
    }

    public void setAngajat(Angajat angajat) {
        this.angajat = angajat;
    }

    public LinkedList<Achizitie> getAchizitii() {
        return achizitii;
    }

    public void setAchizitii(LinkedList<Achizitie> achizitii) {
        this.achizitii = achizitii;
    }

    public void semneazaAchizitie(CategorieCheltuieli categorieCheltuieli) {
        System.out.println("Introduceti data achizitiei: ");
        int ziua;
        do {
            System.out.print("Ziua: ");
            ziua = scanner.nextInt();
        } while (ziua <= 0 || ziua >= 31);

        int luna;
        do {
            System.out.print("Luna: ");
            luna = scanner.nextInt();
        } while (luna <= 0 || luna >= 13);

        System.out.print("Anul: ");
        int anul = scanner.nextInt();

        System.out.println("Introduceti suma achizitiei: ");
        int suma = scanner.nextInt();

        achizitii.add(new Achizitie(categorieCheltuieli, LocalDate.of(anul, luna, ziua), suma));
    }

    public void afiseazaAchizitii() {
        if (achizitii.isEmpty()) {
            System.out.println("Subdiviziunea nu contine achizitii");
        } else {
            System.out.println(denumire);
            for (Achizitie achizitie : achizitii) {
                System.out.println(achizitie + "\n");
            }
        }
    }

    public void afisareRaporturi() {
        angajat.raportAchizitie(this, achizitii);
    }

    @Override
    String afisareDenumire() {
        return "Subdiviziune";
    }

    @Override
    public String toString() {
        return "Subdiviziune{" +
                "denumire='" + denumire + '\'' +
                ", adresa='" + adresa + '\'' +
                ", telefon='" + telefon + '\'' +
                "\n" + angajat + "\n" +
                '}';
    }
}

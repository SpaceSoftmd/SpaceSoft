package CompanieDeConsultatii;

import CompanieDeConsultatii.CitireDate.CitireInformatii;
import CompanieDeConsultatii.Contabilitate.Contabilitate;
import CompanieDeConsultatii.ParteaOficiala.CategorieCheltuieli;
import CompanieDeConsultatii.ParteaOficiala.Subdiviziune;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Companie implements Menu {
    private Scanner scanner = new Scanner(System.in);
    private CitireInformatii citireInformatii = new CitireInformatii();
    private List<Subdiviziune> subdiviziuni = new ArrayList<>();
    private List<Angajat> angajati = new ArrayList<>();
    private List<CategorieCheltuieli> categoriiCheltuieli = new ArrayList<>();
    private Contabilitate contabilitate = new Contabilitate();

    public Companie() {
        citireInformatii.citireAngajat(angajati);
        citireInformatii.citireSubdiviziuni(subdiviziuni);
        citireInformatii.citireCategoriiCheltuieli(categoriiCheltuieli);
        initilizareSubdivizCuAngaj();
    }

    public Companie(List<Subdiviziune> subdiviziuni, List<Angajat> angajati, List<CategorieCheltuieli> categoriiCheltuieli) {
        this.subdiviziuni = subdiviziuni;
        this.angajati = angajati;
        this.categoriiCheltuieli = categoriiCheltuieli;
    }

    public CitireInformatii getCitireInformatii() {
        return citireInformatii;
    }

    public void setCitireInformatii(CitireInformatii citireInformatii) {
        this.citireInformatii = citireInformatii;
    }

    public List<Subdiviziune> getSubdiviziuni() {
        return subdiviziuni;
    }

    public void setSubdiviziuni(List<Subdiviziune> subdiviziuni) {
        this.subdiviziuni = subdiviziuni;
    }

    public List<Angajat> getAngajati() {
        return angajati;
    }

    public void setAngajati(List<Angajat> angajati) {
        this.angajati = angajati;
    }

    public List<CategorieCheltuieli> getCategoriiCheltuieli() {
        return categoriiCheltuieli;
    }

    public void setCategoriiCheltuieli(List<CategorieCheltuieli> categoriiCheltuieli) {
        this.categoriiCheltuieli = categoriiCheltuieli;
    }

    public Contabilitate getContabilitate() {
        return contabilitate;
    }

    public void setContabilitate(Contabilitate contabilitate) {
        this.contabilitate = contabilitate;
    }

    public void initilizareSubdivizCuAngaj() {
        for (int i = 0; i < subdiviziuni.size(); i++) {
            subdiviziuni.get(i).setAngajat(angajati.get(i));
        }
    }

    @Override
    public void afiseazaLista() {
        System.out.println("""
                (1) -@ Afisarea angajatilor
                (2) -@ Afisarea subdiviziunilor
                (3) -@ Afisarea categoriilor de cheltuieli
                (4) -@ Afisarea achizitiilor a unei subdiviziuni
                (5) -@ Afisarea tuturor achizitiilor
                (6) -@ Semneaza o achizitie
                (7) -@ Adaugarea unei subdiviziuni si angajatului respectiv
                (8) -@ Afisarea raporturilor angajatilor
                (9) -@ Afisarea bonurilor pentru fiecare achizitie
                (10) -@ Afisarea datelor despre compania de consultatii
                """);
    }

    @Override
    public void apeleazaMenu() {
        int alegere;
        do {
            afiseazaLista();
            System.out.print("Introduceti alegerea: ");
            alegere = scanner.nextInt();

            switch (alegere) {
                case 0:
                    System.out.println("Programul a terminat lucrul");
                    scanner.close();
                    break;
                case 1:
                    afiseazaAngajati();
                    break;
                case 2:
                    afisareSubdiviziuni();
                    break;
                case 3:
                    afisareCategoriiCheltuieli();
                    break;
                case 4:
                    achizitiileUneiSubdiviziuni();
                    break;
                case 5:
                    afiseazaAchizitii();
                    break;
                case 6:
                    semneazaAchizitie();
                    break;
                case 7:
                    addaugaSubdiviziuneAngajat();
                    break;
                case 8:
                    afisareRaporturi();
                    break;
                case 9:
                    afiseazaBonurile();
                    break;
                case 10:
                    System.out.println(this);
                    break;
            }
        } while (alegere != 0);
    }

    public void afiseazaAngajati() {
        for (Angajat angajat : angajati) {
            System.out.println(angajat + "\n");
        }
    }

    public void afisareSubdiviziuni() {
        for (Subdiviziune subdiviziune : subdiviziuni) {
            System.out.println(subdiviziune + "\n");
        }
    }

    public void afisareCategoriiCheltuieli() {
        for (CategorieCheltuieli categorieCheltuieli : categoriiCheltuieli) {
            System.out.println(categorieCheltuieli + "\n");
        }
    }

    public void achizitiileUneiSubdiviziuni() {
        afisareSubdiviziuni();
        cautaSubdiviziune().afiseazaAchizitii();
    }

    public void afiseazaAchizitii() {
        for (Subdiviziune subdiviziune : subdiviziuni) {
            subdiviziune.afiseazaAchizitii();
            System.out.println("\n");
        }
    }

    public void semneazaAchizitie() {
        afisareCategoriiCheltuieli();
        System.out.println("Alegeti categoria de cheltuieli");
        CategorieCheltuieli categorieCheltuieli = cautaCategorieCheltuieli();

        afisareSubdiviziuni();
        System.out.println("Alegeti subdiviziunea");
        Subdiviziune subdiviziune = cautaSubdiviziune();

        subdiviziune.semneazaAchizitie(categorieCheltuieli);
        contabilitate.adaugaBon(subdiviziune.getAchizitii().getLast());
    }

    public CategorieCheltuieli cautaCategorieCheltuieli() {
        System.out.print("Introduceti denumirea: ");
        String denumire = scanner.next();

        for (CategorieCheltuieli categorieCheltuieli : categoriiCheltuieli) {
            if (categorieCheltuieli.getDenumire().equals(denumire)) {
                return categorieCheltuieli;
            }
        }
        return categoriiCheltuieli.get(0);
    }

    public Subdiviziune cautaSubdiviziune() {
        System.out.print("Introdu denumirea: ");
        String denumire = scanner.next();

        for (Subdiviziune subdiviziune : subdiviziuni) {
            if (subdiviziune.getDenumire().equals(denumire)) {
                return subdiviziune;
            }
        }
        return subdiviziuni.get(0);
    }

    public void addaugaSubdiviziuneAngajat() {
        System.out.println("Introduceti datele subdiviziunii noi");
        System.out.print("Denumirea: ");
        String denumire = scanner.next();
        System.out.print("Adresa: ");
        String adresa = scanner.next();
        System.out.print("Nr de telefon: ");
        String telefon = scanner.next();

        System.out.println("Introduceti numele si prenumele angajatului");
        System.out.print("Nume: ");
        String nume = scanner.next();
        System.out.print("Prenume: ");
        String prenume = scanner.next();
        Angajat angajat = new Angajat(nume, prenume);

        angajati.add(angajat);
        subdiviziuni.add(new Subdiviziune(denumire, adresa, telefon, angajat));
    }

    public void afisareRaporturi() {
        for (Subdiviziune subdiviziune : subdiviziuni) {
            subdiviziune.afisareRaporturi();
        }
    }

    public void afiseazaBonurile() {
        contabilitate.afiseazaBonuri();
    }

    public int numarulDeAchizitii() {
        int sum = 0;
        for (Subdiviziune subdiviziune : subdiviziuni) {
            sum += subdiviziune.getAchizitii().size();
        }
        return sum;
    }

    @Override
    public String toString() {
        return "Companie de consultatii: " +
                "\nNumarul de angajati: " + angajati.size() +
                "\nNumarul de subdiviziuni: " + subdiviziuni.size() +
                "\nNumarul de categorii de cheltuieli: " + categoriiCheltuieli.size() +
                "\nNumarul de achizitii: " + numarulDeAchizitii() + "\n";
    }


}

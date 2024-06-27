package CompanieDeConsultatii.ParteaOficiala;

import java.time.LocalDate;

public class Achizitie {
    private CategorieCheltuieli categorieCheltuieli;
    private LocalDate dataAchizitiei;
    private int suma;

    public Achizitie() {
    }

    public Achizitie(CategorieCheltuieli categorieCheltuieli, LocalDate dataAchizitiei, int suma) {
        this.categorieCheltuieli = categorieCheltuieli;
        this.dataAchizitiei = dataAchizitiei;
        this.suma = suma;
    }

    public CategorieCheltuieli getCategorieCheltuieli() {
        return categorieCheltuieli;
    }

    public void setCategorieCheltuieli(CategorieCheltuieli categorieCheltuieli) {
        this.categorieCheltuieli = categorieCheltuieli;
    }

    public LocalDate getDataAchizitiei() {
        return dataAchizitiei;
    }

    public void setDataAchizitiei(LocalDate dataAchizitiei) {
        this.dataAchizitiei = dataAchizitiei;
    }

    public int getSuma() {
        return suma;
    }

    public void setSuma(int suma) {
        this.suma = suma;
    }

    @Override
    public String toString() {
        return "Achizitie{" +
                "\n" + categorieCheltuieli +
                "\ndataAchizitiei=" + dataAchizitiei.getDayOfMonth() +
                "." + dataAchizitiei.getMonthValue() +
                "." + dataAchizitiei.getYear() +
                ", suma=" + suma + "\n " +
                '}';
    }
}

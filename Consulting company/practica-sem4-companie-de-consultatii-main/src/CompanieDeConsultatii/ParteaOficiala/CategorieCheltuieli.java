package CompanieDeConsultatii.ParteaOficiala;

public class CategorieCheltuieli {
    private String denumire;
    private String descriere;
    private int sumaMaxPerLuna;

    public CategorieCheltuieli() {
    }

    public CategorieCheltuieli(String denumire, int sumaMaxPerLuna) {
        this.denumire = denumire;
        this.sumaMaxPerLuna = sumaMaxPerLuna;
    }

    public CategorieCheltuieli(String denumire, String descriere, int sumaMaxPerLuna) {
        this.denumire = denumire;
        this.descriere = descriere;
        this.sumaMaxPerLuna = sumaMaxPerLuna;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }

    public String getDescriere() {
        return descriere;
    }

    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }

    public int getSumaMaxPerLuna() {
        return sumaMaxPerLuna;
    }

    public void setSumaMaxPerLuna(int sumaMaxPerLuna) {
        this.sumaMaxPerLuna = sumaMaxPerLuna;
    }

    @Override
    public String toString() {
        return "CategorieCheltuieli{" +
                "denumire='" + denumire + '\'' +
                ", descriere='" + descriere + '\'' +
                ", sumaMaxPerLuna=" + sumaMaxPerLuna +
                '}';
    }
}

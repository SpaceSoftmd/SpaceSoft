package CompanieDeConsultatii.CitireDate;

import CompanieDeConsultatii.Angajat;
import CompanieDeConsultatii.ParteaOficiala.CategorieCheltuieli;
import CompanieDeConsultatii.ParteaOficiala.Subdiviziune;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Scanner;

public class CitireInformatii {
    public void citireAngajat(List<Angajat> angajati) {
        try {
            Scanner scanner = new Scanner(new File("src//CompanieDeConsultatii//CitireDate//Angajati.txt"));
            while (scanner.hasNextLine()) {
                angajati.add(new Angajat(scanner.next(), scanner.next()));
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void citireSubdiviziuni(List<Subdiviziune> subdiviziuni) {
        try {
            Scanner scanner = new Scanner(new File("src//CompanieDeConsultatii//CitireDate//Subdiviziuni.txt"));
            while (scanner.hasNextLine()) {
                subdiviziuni.add(new Subdiviziune(scanner.next(), scanner.next(), scanner.next()));
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void citireCategoriiCheltuieli(List<CategorieCheltuieli> categoriiCheltuieli) {
        try {
            Scanner scanner = new Scanner(new File("src/CompanieDeConsultatii/CitireDate/CategoriiCheltuieli.txt"));
            while (scanner.hasNextLine()) {
                categoriiCheltuieli.add(new CategorieCheltuieli(scanner.next(), scanner.next(), scanner.nextInt()));
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}

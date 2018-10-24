package chl.hajo.library.service;

import chl.hajo.library.core.Address;
import chl.hajo.library.core.Author;
import chl.hajo.library.core.Book;
import chl.hajo.library.core.Genre;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Utility to get some data to the simulated database
 *
 * @author hajo
 */
public class DataSupplier {

    private final static Address[] ADDRS = {new Address("Why", 1, "Bruksorten"),
        new Address("Stigen", 2, "Centralorten"), new Address("Allen", 3, "Storstaden")};
    private static final Random RAND = new Random();

    public static Address getRandomAddress() {
        return ADDRS[RAND.nextInt(ADDRS.length)];
    }
    
    private final static Genre [] GENRES = {Genre.THRILLER, Genre.BIOGRAPHY, Genre.NOVEL, Genre.ROMANTIC_NOVEL};
    
    //public static Genre getGenre() {
    //    return GENRES[RAND.nextInt(GENRES.length)];
   // }

    public static List<Author> getAuthors() {
        List<Author> authors = new ArrayList<>();
        String[] auths = {
            "FF;Fia;Fiasson;fia@mail",
            "NN;Nisse;Nissesson;nisse@mail",
            "PP;Pelle;Pellesson;pelle@mail",
            "SN;Siv;Nissesson;siv@mail",
            "PE;Pelle;Eriksson;eriksson@mail",
            "RU;Ruben;Eriksson;ruben@mail"
            };
        for (String s : auths) {
            String[] d = s.split(";");
            Author a = new Author(d[0], d[1], d[2], d[3], getRandomAddress());
            authors.add(a);
        }
        return authors;
    }
    
    public static List<Book> getBooks() {
        List<Book> books = new ArrayList<>();
        String[] boks = {
            "1234,How to win,THRILLER, 5.2",
            "1235,How to lose,BIOGRAPHY,8.7",
            "1236,How to draw,NOVEL,2.4",
            "1237,How to meme,ROMANTIC_NOVEL,2.4"
            };
        for (String s : boks) {
            String[] d = s.split(",");
            Book b = new Book(d[0], d[1], Genre.valueOf(d[2]) , Double.parseDouble(d[3]));
            books.add(b);
        }
        return books;
    }

}

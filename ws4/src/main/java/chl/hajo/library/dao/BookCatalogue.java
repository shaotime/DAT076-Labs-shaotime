package chl.hajo.library.dao;

import chl.hajo.library.core.Book;
import static java.lang.System.out;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import chl.hajo.library.core.QBook;
import chl.hajo.library.service.DataSupplier;
import com.querydsl.jpa.impl.JPAQueryFactory;

/**
 *
 * @author hajo
 */
@Stateless
public class BookCatalogue extends AbstractQuery<Book, String> {

    @PersistenceContext(unitName = "library_pu")
    private EntityManager em;
      
    private final List<Book> books = DataSupplier.getBooks();

    public BookCatalogue() {
        // author is default object created by QueryDSL, see Generated Sources
        super(Book.class, QBook.book);
    }

    @Override
    public EntityManager getEntityManager() {
        return em;
    }
    @Override
    public void setEntityManager(EntityManager em) {
        this.em = em;
    }

    public List<Book> findByName(String name) {
        QBook book = QBook.book;
        JPAQueryFactory qf = new JPAQueryFactory(em);
        List<Book> found = qf.select(book)
                .from(book)
                .where(book.title.eq(name))
                .fetch();
        out.println(found);
        return found;
    }
}

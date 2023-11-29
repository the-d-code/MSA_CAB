/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author muzz
 */
@Entity
@Table(name = "booking")
@NamedQueries({
    @NamedQuery(name = "Booking.findAll", query = "SELECT b FROM Booking b"),
    @NamedQuery(name = "Booking.findByBookingId", query = "SELECT b FROM Booking b WHERE b.bookingId = :bookingId")})
public class Booking implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "bookingId")
    private Integer bookingId;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "source")
    private String source;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "destination")
    private String destination;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "bookingtime")
    private String bookingtime;
    @JoinColumn(name = "cabId", referencedColumnName = "cabId")
    @ManyToOne(optional = false)
    private Cab cabId;
    @JoinColumn(name = "custId", referencedColumnName = "custId")
    @ManyToOne(optional = false)
    private Customer custId;

    public Booking() {
    }

    public Booking(Integer bookingId) {
        this.bookingId = bookingId;
    }

    public Booking(Integer bookingId, String source, String destination, String bookingtime) {
        this.bookingId = bookingId;
        this.source = source;
        this.destination = destination;
        this.bookingtime = bookingtime;
    }

    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getBookingtime() {
        return bookingtime;
    }

    public void setBookingtime(String bookingtime) {
        this.bookingtime = bookingtime;
    }

    public Cab getCabId() {
        return cabId;
    }

    public void setCabId(Cab cabId) {
        this.cabId = cabId;
    }

    public Customer getCustId() {
        return custId;
    }

    public void setCustId(Customer custId) {
        this.custId = custId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (bookingId != null ? bookingId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Booking)) {
            return false;
        }
        Booking other = (Booking) object;
        if ((this.bookingId == null && other.bookingId != null) || (this.bookingId != null && !this.bookingId.equals(other.bookingId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.Booking[ bookingId=" + bookingId + " ]";
    }
    
}

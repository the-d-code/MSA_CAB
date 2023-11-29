/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Entity;

import java.io.Serializable;
import java.util.Collection;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author muzz
 */
@Entity
@Table(name = "cab")
@NamedQueries({
    @NamedQuery(name = "Cab.findAll", query = "SELECT c FROM Cab c"),
    @NamedQuery(name = "Cab.findByCabId", query = "SELECT c FROM Cab c WHERE c.cabId = :cabId")})
public class Cab implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "cabId")
    private Integer cabId;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "registrationNo")
    private String registrationNo;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "city")
    private String city;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "state")
    private String state;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "driverName")
    private String driverName;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "status")
    private String status;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cabId")
    private Collection<Booking> bookingCollection;

    public Cab() {
    }

    public Cab(Integer cabId) {
        this.cabId = cabId;
    }

    public Cab(Integer cabId, String registrationNo, String city, String state, String driverName, String status) {
        this.cabId = cabId;
        this.registrationNo = registrationNo;
        this.city = city;
        this.state = state;
        this.driverName = driverName;
        this.status = status;
    }

    public Integer getCabId() {
        return cabId;
    }

    public void setCabId(Integer cabId) {
        this.cabId = cabId;
    }

    public String getRegistrationNo() {
        return registrationNo;
    }

    public void setRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @JsonbTransient
    public Collection<Booking> getBookingCollection() {
        return bookingCollection;
    }

    public void setBookingCollection(Collection<Booking> bookingCollection) {
        this.bookingCollection = bookingCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (cabId != null ? cabId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Cab)) {
            return false;
        }
        Cab other = (Cab) object;
        if ((this.cabId == null && other.cabId != null) || (this.cabId != null && !this.cabId.equals(other.cabId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.Cab[ cabId=" + cabId + " ]";
    }
    
}

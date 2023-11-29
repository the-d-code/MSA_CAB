/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package ejb;

import Entity.Booking;
import Entity.Cab;
import java.util.Collection;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.PathParam;

/**
 *
 * @author muzz
 */
@Stateless
public class CabSessionBean {

    @PersistenceContext(unitName = "com.muzammilnagariya_CabApp_war_1.0-SNAPSHOTPU")
    EntityManager em;

    public Collection<Cab> getAllCabs() {
        return em.createNamedQuery("Cab.findAll").getResultList();
    }

    public Collection<Booking> getSingleBooking(Integer cabId) {
        return em.createNamedQuery("Booking.findbyCabId").setParameter("cabId", cabId).getResultList();
    }
    
    public Collection<Cab> getCabByCity(String city){
        return em.createNamedQuery("Cab.findByCity").setParameter("city", city).getResultList();
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
}

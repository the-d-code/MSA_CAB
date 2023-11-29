package Entity;

import Entity.Cab;
import Entity.Customer;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-11-29T15:33:27", comments="EclipseLink-2.7.9.v20210604-rNA")
@StaticMetamodel(Booking.class)
public class Booking_ { 

    public static volatile SingularAttribute<Booking, String> bookingtime;
    public static volatile SingularAttribute<Booking, String> destination;
    public static volatile SingularAttribute<Booking, Customer> custId;
    public static volatile SingularAttribute<Booking, String> source;
    public static volatile SingularAttribute<Booking, Integer> bookingId;
    public static volatile SingularAttribute<Booking, Cab> cabId;

}
package Entity;

import Entity.Booking;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-11-29T15:33:27", comments="EclipseLink-2.7.9.v20210604-rNA")
@StaticMetamodel(Cab.class)
public class Cab_ { 

    public static volatile SingularAttribute<Cab, String> city;
    public static volatile SingularAttribute<Cab, String> registrationNo;
    public static volatile SingularAttribute<Cab, String> driverName;
    public static volatile SingularAttribute<Cab, String> state;
    public static volatile CollectionAttribute<Cab, Booking> bookingCollection;
    public static volatile SingularAttribute<Cab, Integer> cabId;
    public static volatile SingularAttribute<Cab, String> status;

}
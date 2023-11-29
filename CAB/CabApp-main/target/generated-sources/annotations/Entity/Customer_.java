package Entity;

import Entity.Booking;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-11-29T15:33:27", comments="EclipseLink-2.7.9.v20210604-rNA")
@StaticMetamodel(Customer.class)
public class Customer_ { 

    public static volatile SingularAttribute<Customer, String> phone;
    public static volatile SingularAttribute<Customer, Integer> custId;
    public static volatile CollectionAttribute<Customer, Booking> bookingCollection;
    public static volatile SingularAttribute<Customer, String> customerName;
    public static volatile SingularAttribute<Customer, String> email;

}
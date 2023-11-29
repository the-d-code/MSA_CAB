/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Client;

import Entity.Booking;
import Entity.Cab;
import java.util.Collection;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.Config;
import org.eclipse.microprofile.config.ConfigProvider;
import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

/**
 *
 * @author muzz
 */
@RegisterRestClient(baseUri = "http://localhost:8080/CabApp-main/rest/example/")
public interface MyClient {

    @GET
    @ClientHeaderParam(name = "authorization", value = "{generateToken}")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllCabs")
    public Collection<Cab> getAllCabs();

    @GET
    @ClientHeaderParam(name = "authorization", value = "{generateToken}")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSingleBooking/{cabId}")
    public Collection<Booking> getSingleBooking(@PathParam("cabId") Integer cabId);

    @GET
    @ClientHeaderParam(name = "authorization", value = "{generateToken}")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getCabByCity/{city}")
    public Collection<Cab> getCabByCity(@PathParam("city") String city);

    default String generateToken() {
        Config config = ConfigProvider.getConfig();
        String token = "Bearer " + config.getValue("jwt-string", String.class);
        return token;
    }

}

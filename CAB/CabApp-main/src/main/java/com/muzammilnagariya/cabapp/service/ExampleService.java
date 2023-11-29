package com.muzammilnagariya.cabapp.service;

import Entity.Booking;
import Entity.Cab;
import ejb.CabSessionBean;
import java.util.Collection;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/example")
public class ExampleService {

    @Inject
    CabSessionBean csb;

    @GET
    public Response get() {
        return Response.ok("Hello, world!").build();
    }

    @GET
    @RolesAllowed("Customer")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getAllCabs")
    public Collection<Cab> getAllCabs() {
        return csb.getAllCabs();
    }
    
    @GET
    @RolesAllowed("Customer")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getSingleBooking/{cabId}")
    public Collection<Booking> getSingleBooking(@PathParam("cabId")Integer cabId){
        return csb.getSingleBooking(cabId);
    }
    
    
    @GET
    @RolesAllowed("Customer")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getCabByCity/{city}")
    public Collection<Cab> getCabByCity(@PathParam("city")String city){
        return csb.getCabByCity(city);
    }

}

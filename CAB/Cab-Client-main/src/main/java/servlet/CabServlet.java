/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import Client.MyClient;
import Entity.Booking;
import Entity.Cab;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.eclipse.microprofile.rest.client.inject.RestClient;

/**
 *
 * @author muzz
 */
@WebServlet(name = "CabServlet", urlPatterns = {"/CabServlet"})
public class CabServlet extends HttpServlet {

    @Inject
    @RestClient
    MyClient mcl;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CabServlet</title>");
            out.println("</head>");
            out.println("<body>");

            out.println("<form method='GET'>");
            out.println("<input type='text' name='txtSearch'>");
            out.println("<input type='submit' name='btnSubmit' value='Search'>");
            out.println("</form>");

            Collection<Cab> cabs = null;

            cabs = mcl.getAllCabs();
            
            for (Cab cab : cabs) {
                out.println("<h1>Cab ID: " + cab.getCabId() + " Registration Number: " + cab.getRegistrationNo() + " City: " + cab.getCity() + "</h1>");
                if (cab.getStatus().contains("onride")) {
                    Collection<Booking> bookings = mcl.getSingleBooking(cab.getCabId());

                    for (Booking booking : bookings) {
                        out.println("<h1>" + booking.getBookingId() + " " + booking.getCustId().getCustomerName() + "</h1>");
                    }
                }
            }
            out.println("<h1>Servlet CabServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

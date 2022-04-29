package com.yaso.ui1;

import java.io.IOException;

import javax.ejb.CreateException;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yaso.ejb1.Info2Service;
import com.yaso.ejb1.Info2ServiceHome;

/**
 * Servlet implementation class InfoServlet
 */
public class InfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public InfoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			InfoService infoService = new InfoService();

			InitialContext initialContext = new InitialContext();
			Object found = initialContext.lookup("java:comp/env/ejb/Info2Service");
			Info2ServiceHome ejbService2Home = (Info2ServiceHome)javax.rmi.PortableRemoteObject.narrow(found, Info2ServiceHome.class);
			Info2Service ejbInfo2Service = ejbService2Home.create();

			response.getWriter().append("UI,").append(infoService.getHostname()).append("\n");
			response.getWriter().append("EJB,").append(ejbInfo2Service.getHostname()).append("\n");
		} catch (NamingException exception) {
			response.getWriter().append(exception.toString());
		} catch (CreateException exception) {
			response.getWriter().append(exception.toString());
		}
	}

}

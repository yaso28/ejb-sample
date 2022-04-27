package com.yaso.ejb1;

import java.rmi.RemoteException;

import javax.ejb.EJBException;
import javax.ejb.SessionBean;
import javax.ejb.SessionContext;

public class Info2ServiceBean implements SessionBean {

	public String getHostname() {
		String hostname = System.getenv("HOSTNAME");
		if (hostname == null) {
			hostname = "NULL-EJB";
		}
		return hostname;
	}

	@Override
	public void setSessionContext(SessionContext ctx) throws EJBException, RemoteException {
		// TODO 自動生成されたメソッド・スタブ

	}

	@Override
	public void ejbRemove() throws EJBException, RemoteException {
		// TODO 自動生成されたメソッド・スタブ

	}

	@Override
	public void ejbActivate() throws EJBException, RemoteException {
		// TODO 自動生成されたメソッド・スタブ

	}

	@Override
	public void ejbPassivate() throws EJBException, RemoteException {
		// TODO 自動生成されたメソッド・スタブ

	}

}

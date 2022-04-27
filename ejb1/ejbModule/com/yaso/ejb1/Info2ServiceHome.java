package com.yaso.ejb1;

import java.rmi.RemoteException;

import javax.ejb.CreateException;
import javax.ejb.EJBHome;

public interface Info2ServiceHome extends EJBHome {
	Info2Service create() throws RemoteException, CreateException;
}

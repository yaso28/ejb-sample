package com.yaso.ejb1;

import java.rmi.RemoteException;

import javax.ejb.EJBObject;

public interface Info2Service extends EJBObject {
	String getHostname() throws RemoteException;
}

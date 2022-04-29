package com.yaso.ui1;

public class InfoService {
	public String getHostname() {
		String hostname = System.getenv("HOSTNAME");
		if (hostname == null) {
			hostname = "NULL-UI";
		}
		return hostname;
	}
}

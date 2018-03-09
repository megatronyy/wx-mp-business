package com.quwb.web.utils;

import java.math.BigInteger;
import java.util.UUID;

/**
 * Created by zhangwd on 2017/5/27.
 */
public class UUIDUtil {
	
	/**
	 * 生产形如格式为：550E8400-E29B-11D4-A716-446655440000的UUID
	 * @return
	 */
	public static String getUUIDToString(){
		try {
			String uuid = UUID.randomUUID().toString();
			return uuid;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 生产无“-”的UUID
	 * @return
	 */
	public static String getUUIDToStringNoDash(){
		try {
			String uuid = UUID.randomUUID().toString();
			uuid = uuid.substring(0,8)+uuid.substring(9,13)+uuid.substring(14,18)+uuid.substring(19,23)+uuid.substring(24);
			return uuid;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 生产long型uuid
	 * @return
	 */
	public static long getUUIDToLong(){
		try {
			String uuid = getUUIDToStringNoDash();
			BigInteger bigInteger = new BigInteger(uuid, 16);
			return bigInteger.longValue();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
//	public static void main(String[] args) {
//		System.out.println(getUUIDToString());
//		System.out.println(getUUIDToStringNoDash());
//		System.out.println(getUUIDToLong());
//
//	}
}

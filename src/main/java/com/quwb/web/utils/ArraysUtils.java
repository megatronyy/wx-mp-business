package com.quwb.web.utils;

import java.util.Arrays;

public final class ArraysUtils {
	/**
	 * ����ƴ��
	 *
	 * @param begin
	 * @param end
	 * @return
	 */
	public final static byte[] arraycopy(final byte[] begin, final byte[] end) {
		if (begin == null) {
            return end;
        }
		if (end == null) {
            return begin;
        }
		int length = begin.length + end.length;
		byte[] result = new byte[length];
		System.arraycopy(begin, 0, result, 0, begin.length);
		System.arraycopy(end, 0, result, begin.length, end.length);
		return result;
	}

	/**
	 * �ֽ�����׷��
	 *
	 * @param source
	 * @param sourceIndex
	 * @param end
	 * @return
	 */
	public final static byte[] arrayappend(final byte[] source,
			int sourceIndex, final byte[] end) {
		if (end.length + sourceIndex > source.length) {
            throw new IndexOutOfBoundsException("length = " + source.length
                    + " , total length = " + (sourceIndex + end.length));
        }
		System.arraycopy(end, 0, source, sourceIndex, end.length);
		return source;
	}

	/**
	 * byte�����ȡ,ע�⣺length������С��bytes�ĳ���,��length<0����length>bytes.length-startIndex
	 * ,���startIndex��ʼһֱ��ȡ�����
	 *
	 * @param bytes
	 *            byte ��Ҫ��ȡ��byte����
	 * @param startIndex
	 *            int ��ʼ��ȡ���±�
	 * @param length
	 *            int ��ȡ���ܳ���
	 *
	 * @return byte[] ��ȡ����byte����
	 */
	public static final byte[] subarrays(final byte[] bytes,
			final int startIndex, final int length) {
		if (startIndex == 0 && bytes.length == length) {
			return bytes;
		} else if (length == -1 || bytes.length - startIndex < length) {
			byte[] rbytes = new byte[bytes.length - startIndex];
			System.arraycopy(bytes, startIndex, rbytes, 0, rbytes.length);
			return rbytes;
		} else {
			byte[] rbytes = new byte[length];
			System.arraycopy(bytes, startIndex, rbytes, 0, length);
			return rbytes;
		}
	}

	public static final byte[] subarrays(final byte[] bytes,
			final int startIndex) {
		if (startIndex > bytes.length) {
			throw new IndexOutOfBoundsException("statIndex = "+startIndex+" , bytes length = "+bytes.length+"");
		} else {
			byte[] rbytes = new byte[bytes.length - startIndex];
			System.arraycopy(bytes, startIndex, rbytes, 0, rbytes.length);
			return rbytes;
		}
	}

	public static final boolean equals(byte[] frist, byte[] second) {
		return Arrays.equals(frist, second);
	}

	public static final int indexOf(byte b, byte[] bytes) {
		for (int i = 0, length = bytes.length; i < length; i++) {
			if (b == bytes[i]) {
                return i;
            }
		}
		return -1;
	}
}

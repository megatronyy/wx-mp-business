package com.quwb.web.mapper;

import com.quwb.web.entity.ShopDetail;

public interface ShopDetailMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Long detailid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    int insert(ShopDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    int insertSelective(ShopDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    ShopDetail selectByPrimaryKey(Long detailid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(ShopDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ShopDetail
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(ShopDetail record);
}
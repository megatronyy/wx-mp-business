package com.quwb.web.common;


import java.util.ArrayList;
import java.util.List;

/**
 * Created by chendd on 2015/3/29.
 */
public class BasePageResult<T> {
    protected int pageNo = 1;
    protected int pageSize = 20;
    protected int totalCount;
    protected int totalPage = 1;
    protected List<T> list;
    protected List<Integer> nums = new ArrayList<>();
    protected int startNum = 1;
    protected int temp0 = 0;

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        if (pageNo <= 0) {
            pageNo = 1;
        }
        this.pageNo = pageNo;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        if (pageSize < 0) {
            pageSize = 0;
        }
        this.pageSize = pageSize;
    }

    public int getStartRow() {
        return (pageNo - 1) * pageSize;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }


    public int getTotalPage() {
        if (totalCount > 0) {
            if (totalCount % pageSize == 0) {
                return totalCount / pageSize;
            } else {
                return totalCount / pageSize + 1;
            }
        }
        return 1;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public List<Integer> getNums() {
        int begin = 1;
        int end = 10;
        int countPage = getTotalPage();
        if (countPage <= 10) {
            begin = 1;
            end = countPage;
        } else {
            if (countPage > 10) {
                begin = pageNo - 4;
                end = pageNo + 5;
                if (begin < 1) {
                    begin = 1;
                    end = 10;
                }
                if (end > countPage) {
                    end = countPage;
                    begin = countPage - 10 + 1;
                }
            }
        }
        for (int i = begin; i <= end; i++) {
            nums.add(i);
        }
        return nums;
    }

    public void setNums(List<Integer> nums) {
        this.nums = nums;
    }

    public int getStartNum() {
        return startNum;
    }

    public void setStartNum(int startNum) {
        this.startNum = startNum;
    }

    public int getTemp0() {
        return temp0;
    }

    public void setTemp0(int temp0) {
        this.temp0 = temp0;
    }
}

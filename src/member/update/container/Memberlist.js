import React, { useEffect } from "react";
import { Table } from "antd";
import useNeedLogin from "../../../common/hook/useNeedLogin";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";
import { Link } from "react-router-dom";
import CommonLayout from "../../../common/component/CommonLayout";
import { storageHelper } from "../../../common/util/storageHelper";
import { loginActions } from "../../login/state/index";
import { RoleGroup } from "../../../common/constant";

export default function Memberlist({ history }) {
  const data = useSelector((state) => state.member.data);
  var count = 0;
  const length = data.length;

  const columns = [
    {
      title: "memberId",
      dataIndex: "memberId",
      render: (text) => {
        return <Link to={() => onLinkClick({ text })}>{text}</Link>;
      },
      sorter: {
        compare: (a, b) => a.memberId.length - b.memberId.length,
      },
    },
    {
      title: "memberName",
      dataIndex: "memberName",
      width: "15%",
      sorter: {
        compare: (a, b) => a.memberName.length - b.memberName.length,
      },
    },
    {
      title: "memberHp",
      dataIndex: "memberHp",
      width: "40%",
      sorter: {
        compare: (a, b) => a.memberHp - b.memberHp,
      },
    },
  ];

  useNeedLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setData([], history));
  }, [dispatch, history]);

  function onLinkClick({ text }) {
    count += 1;
    if (count > length) {
      dispatch(actions.getMember(text, history));
    }
  }

  function reload() {
    dispatch(actions.setData([], history));
  }

  function onLogout() {
    dispatch(loginActions.setMember("", RoleGroup.ROLE_ANONYMOUS));
    storageHelper.set("token", "");
  }

  return (
    <CommonLayout
      onLogout={onLogout}
      menuKey={"1"}
      menuListOnClick={reload}
      ContentBody={<Table dataSource={data} columns={columns} />}
    />
  );
}

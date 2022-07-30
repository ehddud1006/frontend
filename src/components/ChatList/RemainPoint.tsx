import xButton from 'assets/chatImages/xbutton.png';
import ChatContext from 'context/ChatContext';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRemainOpen } from 'slice/pointModal';

import axios from '../../chatApi';
import './remainPoint.css';

const RemainPoint = () => {
  const remain = useRef<any>();
  const { channelInfo } = useContext<any>(ChatContext);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const pointOpen = useSelector((store: any) => store.pointOpen);
  const maxx = 11122;
  const dispatcher = useDispatch();

  const counter = useCallback(() => {
    let now = pointOpen.remainPoint;

    const handle = setInterval(() => {
      remain.current.innerHTML = Math.ceil(pointOpen.remainPoint - now);

      // 목표에 도달하면 정지
      if (remain.current.innerHTML == pointOpen.remainPoint) {
        console.log('first');
        clearInterval(handle);
      }

      // 적용될 수치, 점점 줄어듬
      const step = now / 10;
      // console.log(now);
      console.log(remain.current.innerHTML);
      now -= step;
    }, 10);
  }, [pointOpen]);
  useEffect(() => {
    console.log(pointOpen.remainPoint);
    counter();
  }, []);
  return (
    <div className="remainWrapper">
      <img
        alt="closeButton"
        role="presentation"
        className="closeButton"
        onClick={() => {
          dispatcher(setRemainOpen({ value: false }));
        }}
        src={xButton}></img>
      <div className="left">
        <div className="borderRight">
          <div className="usePoint">사용 포인트</div>
          <div className="usePointPoint">{pointOpen.usePoint}</div>
        </div>
      </div>
      <div className="right">
        <div className="remainPoint">남은 포인트</div>
        <div className="remainPointPoint" ref={remain}></div>
      </div>
    </div>
  );
};

export default RemainPoint;

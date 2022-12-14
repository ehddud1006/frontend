import addButton from 'assets/chatImages/addbutton2.png';
import Chat from 'components/ChatChat/Chat';
import ChatList from 'components/ChatList/ChatList';
import CreateChannel from 'components/CreateChannel/CreateChannel';
import CreateChannelExceptModal from 'components/CreateChannel/CreateChannelExceptModal';
import MyChatList from 'components/MyChatList/MyChatList';
import VoiceChat from 'components/VoiceChat/Chat';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatColor } from 'slice/chatColorSlice';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';

import ChatContext from '../../context/ChatContext';
import { resetPublicChats } from '../../slice/publicChats';
import {
  AsideWrap,
  Bio,
  SideListWrap,
  SideList,
  ButtonPurple,
  Order,
  ListTitle,
  Box,
  ChatButton,
} from './styles';
import './test.css';

// const CHAT_STATE_COLORS = {
//   chatList: '#ffe576',
//   myList: '#ffe576',
// } as any;

function Aside() {
  // dummy popular Article
  const { client, happy, setChatList } = useContext<any>(ChatContext);
  // const { JWTtoken, publicChats } = useSelector((store: any) => store);
  const chatColor = useSelector((store: any) => store.chatColor);
  const chatState = useSelector((store: any) => store.chatState);
  const CreateChannelExceptModalOpen = useSelector(
    (store: any) => store.pointOpen.createPointModalExcept,
  );

  const dispatcher = useDispatch();

  // const chatUrl = '/api/v1/webrtc/channels/0';
  // const myChatUrl = '/api/v1/webrtc/mychannel/0';
  // const { data: Data, revalidate }: any = useSWR(
  //   chatColor.chatColor == 'chatList' ? chatUrl : myChatUrl,
  //   url => fetcher(url, JWTtoken.JWTtoken),
  //   {
  //     dedupingInterval: 60000,
  //   },
  // );

  useEffect(() => {
    if (Object.keys(happy).length > 0) {
      happy.unsubscribe();
    }
    if (Object.keys(client).length > 0) {
      client.disconnect();
    }

    setChatList([]);
    console.log('????????????');
    dispatcher(resetPublicChats());
    dispatcher(setLogId({ value: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatColor]);
  const [popularArticle] = useState([
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
  ]);

  const [showCreateChannel, setShowCreateChannel] = useState(false);

  const onClickCreateChannel = useCallback(() => {
    setShowCreateChannel(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateChannel(false);
  }, []);

  return (
    <AsideWrap>
      <Bio>
        <span>??????</span>
        <img
          alt="closeButton"
          role="presentation"
          src={addButton}
          onClick={onClickCreateChannel}
        />
      </Bio>
      <CreateChannel
        show={showCreateChannel}
        onCloseModal={onCloseModal}></CreateChannel>
      {CreateChannelExceptModalOpen && (
        <CreateChannelExceptModal></CreateChannelExceptModal>
      )}
      <Box>
        <ChatButton
          onClick={() => {
            dispatcher(setChatColor({ value: 'chatList' }));
            dispatcher(setChatState({ value: 'chatList' }));
            // chatGetType = 'chatList';
            console.log('dad');
            // revalidate();
          }}
          backgroundColor={
            chatColor.chatColor == 'chatList' ? '#ffe576' : 'white'
          }
          fontWeight={chatColor.chatColor == 'chatList' ? '700' : '400'}>
          ????????? ?????????
        </ChatButton>
        <ChatButton
          onClick={() => {
            dispatcher(setChatColor({ value: 'myList' }));
            dispatcher(setChatState({ value: 'myList' }));
            console.log('dad2');
            // revalidate();
          }}
          backgroundColor={
            chatColor.chatColor == 'myList' ? '#ffe576' : 'white'
          }
          fontWeight={chatColor.chatColor == 'myList' ? '700' : '400'}>
          ??? ?????????
        </ChatButton>
        {/* <button
          onClick={() => setChatState('chatList')}
          className={teststyle.a}
          // style={{
          //   backgroundColor: CHAT_STATE_COLORS[chatState],
          // }}
        >
          ????????? ?????????
        </button> */}
        {/* <button className="b" onClick={() => setChatState('myList')}>
          ??? ?????????
        </button> */}
      </Box>

      {(() => {
        switch (chatState.chatState) {
          case 'chatList':
            return <ChatList />;
          case 'myList':
            return <MyChatList />;
          case 'chat':
            return <Chat></Chat>;
          case 'voicechat':
            return <VoiceChat></VoiceChat>;
          default:
            return null;
        }
      })()}

      <SideListWrap>
        <div>
          <span>???????????????</span>
          <ButtonPurple>+</ButtonPurple>
        </div>
        <SideList>
          {popularArticle.map((article, index) => {
            return (
              <li key={index}>
                <a href={`article/${index}`}>
                  <Order>{index + 1}</Order>
                  <ListTitle>
                    <div>
                      <b>#??????</b> ?????? ????????? ??? ???????????????
                    </div>
                    <div>1??? 23?????? 24??? ??? ??????</div>
                  </ListTitle>
                </a>
              </li>
            );
          })}
        </SideList>
      </SideListWrap>
      <SideListWrap>
        <div>
          <span>???????????????</span>
          <ButtonPurple>+</ButtonPurple>
        </div>
        <SideList>
          {popularArticle.map((article, index) => {
            return (
              <li key={index}>
                <a href={`article/${index}`}>
                  <Order>{index + 1}</Order>
                  <ListTitle>
                    <div>
                      <b>#??????</b> ?????? ????????? ??? ???????????????
                    </div>
                    <div>1??? 23?????? 24??? ??? ??????</div>
                  </ListTitle>
                </a>
              </li>
            );
          })}
        </SideList>
      </SideListWrap>
    </AsideWrap>
  );
}

export default Aside;

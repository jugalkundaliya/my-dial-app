import React, { useState, useEffect } from "react";
import { Modal } from "antd/lib";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import VideoCameraOutlined from "@ant-design/icons/VideoCameraOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import PhoneFilled from "@ant-design/icons/PhoneFilled";
import HoldOutlined from "@ant-design/icons/PauseOutlined";
import SoundOutlined from "@ant-design/icons/SoundOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import UsergroupAddOutlined from "@ant-design/icons/UsergroupAddOutlined";
import ArrowRightOutlined from "@ant-design/icons/ArrowRightOutlined";
import SwapOutlined from "@ant-design/icons/SwapOutlined";
import AudioOutlined from "@ant-design/icons/AudioOutlined";
import KeypadOutlined from "@ant-design/icons/KeyOutlined";
import contacts from "@/assets/contacts.json";
import "./style.css";
import {
  DialPadContainer,
  Display,
  Suggestions,
  SuggestionItem,
  ButtonsGrid,
  ActionButton,
  ButtonLabel,
  BottomButtons,
  VideoCallButton,
  CallButton,
  EraseButton,
  CallInfo,
  CallOptionsGrid,
  EndCallButton,
} from "./styles";

const PhoneDialPad = ({ handleCancel }: { handleCancel: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inCall, setInCall] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [suggestedContacts, setSuggestedContacts] = useState<
    { name: string; phone: string }[]
  >([]);
  const [contactName, setContactName] = useState("Unknown Contact");

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (inCall) {
      timer = setInterval(() => setCallDuration((prev) => prev + 1), 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [inCall]);

  useEffect(() => {
    if (phoneNumber) {
      const suggestions = contacts
        .filter((contact) => contact.phone.includes(phoneNumber))
        .slice(0, 3);
      setSuggestedContacts(suggestions);
    } else {
      setSuggestedContacts([]);
    }
  }, [phoneNumber]);

  const handleButtonClick = (value: string) => {
    setPhoneNumber(phoneNumber + value);
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleCall = () => {
    setInCall(true);
    const matchedContact = contacts.find(
      (contact) => contact.phone === phoneNumber
    );
    setContactName(matchedContact ? matchedContact.name : "Unknown Contact");
  };

  const handleEndCall = () => {
    setInCall(false);
    setCallDuration(0);
    setPhoneNumber("");
    setContactName("Unknown Contact");
  };

  const handleVideoCall = () => {
    alert(`Starting video call to ${phoneNumber}...`);
  };

  const digitLetters: { [key: string]: string } = {
    "2": "ABC",
    "3": "DEF",
    "4": "GHI",
    "5": "JKL",
    "6": "MNO",
    "7": "PQRS",
    "8": "TUV",
    "9": "WXYZ",
    "*": "",
    "0": "+",
    "#": "",
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <Modal
      title=""
      open={true}
      onCancel={handleCancel}
      footer={false}
      className="phone-dial"
    >
      <DialPadContainer>
        {!inCall ? (
          <>
            <Display value={phoneNumber} readOnly />
            <Suggestions>
              {suggestedContacts.map((contact) => (
                <SuggestionItem
                  key={contact.phone}
                  onClick={() => setPhoneNumber(contact.phone)}
                >
                  {contact.name} - {contact.phone}
                </SuggestionItem>
              ))}
            </Suggestions>
            <ButtonsGrid>
              {"123456789*0#".split("").map((digit) => (
                <ActionButton
                  key={digit}
                  onClick={() => handleButtonClick(digit)}
                >
                  <div>{digit}</div>
                  <ButtonLabel>{digitLetters[digit]}</ButtonLabel>
                </ActionButton>
              ))}
            </ButtonsGrid>
            <BottomButtons>
              <VideoCallButton onClick={handleVideoCall} type="default">
                <VideoCameraOutlined />
              </VideoCallButton>
              <CallButton onClick={handleCall}>
                <PhoneOutlined />
              </CallButton>
              <EraseButton onClick={handleDelete} type="default">
                <DeleteOutlined />
              </EraseButton>
            </BottomButtons>
          </>
        ) : (
          <>
            <CallInfo>
              <h2>{contactName}</h2>
              <h3>{phoneNumber}</h3>
              <h3>{formatDuration(callDuration)}</h3>
            </CallInfo>
            <CallOptionsGrid>
              <ActionButton>
                <HoldOutlined />
                <ButtonLabel>Hold</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <SoundOutlined />
                <ButtonLabel>Mute</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <PlusOutlined />
                <ButtonLabel>New Call</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <UsergroupAddOutlined />
                <ButtonLabel>Conference</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <ArrowRightOutlined />
                <ButtonLabel>Transfer</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <SwapOutlined />
                <ButtonLabel>All Transfer</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <AudioOutlined />
                <ButtonLabel>Record</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <KeypadOutlined />
                <ButtonLabel>Keypad</ButtonLabel>
              </ActionButton>
              <ActionButton>
                <VideoCameraOutlined />
                <ButtonLabel>Video</ButtonLabel>
              </ActionButton>
            </CallOptionsGrid>
            <BottomButtons>
              <VideoCallButton type="default">
                <VideoCameraOutlined />
              </VideoCallButton>
              <EndCallButton onClick={handleEndCall}>
                <PhoneFilled rotate={135} />
              </EndCallButton>
              <EraseButton type="default">
                <DeleteOutlined />
              </EraseButton>
            </BottomButtons>
          </>
        )}
      </DialPadContainer>
    </Modal>
  );
};

export default PhoneDialPad;

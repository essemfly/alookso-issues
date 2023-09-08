import React, { useState } from 'react';
import dayjs from 'dayjs';

import {
  Input,
  Button,
  Radio,
  Dropdown,
  Menu,
  Avatar,
  RadioChangeEvent,
  DatePicker,
  TimePicker,
} from 'antd';
import { Celeb, Bias } from '@prisma/client';

interface ChatInputProps {
  onSendMessage: (
    message: string,
    celeb: Celeb,
    linkName: string,
    linkUrl: string,
    linkDate: Date,
    bias: Bias,
    bgColor: string,
  ) => void;
  celebs: Celeb[];
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, celebs }) => {
  const [message, setMessage] = useState<string>('');
  const [selectedCeleb, setSelectedCeleb] = useState<Celeb>(celebs[0]);
  const [linkName, setLinkName] = useState<string>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // const [linkDate, setLinkDate] = useState<Date>(new Date());
  const [bias, setBias] = useState<Bias>(Bias.CENTER);
  const [bgColor, setBgColor] = useState<string>('#eff6ff');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleBiasChange = (e: RadioChangeEvent) => {
    setBias(e.target.value);
  };

  const handleBgColorChange = (e: RadioChangeEvent) => {
    setBgColor(e.target.value);
  };

  const handleSenderClick = ({ key }: { key: React.ReactText }) => {
    const selectedId = parseInt(key as string);
    const selected = celebs.find((celeb) => celeb.id === selectedId);
    if (selected) {
      setSelectedCeleb(selected);
    }
  };

  const dateFormat = 'YYYY-MM-DD';
  const timeFormat = 'HH:mm';

  const handleDateChange = (date: any) => {
    if (date) {
      setSelectedDate(date.toDate());
    } else {
      setSelectedDate(new Date());
    }
  };

  const handleTimeChange = (date: any) => {
    if (date) {
      let selectedDateWithoutTime = new Date(selectedDate);
      selectedDateWithoutTime.setHours(date.$H);
      selectedDateWithoutTime.setMinutes(date.$m);
      setSelectedDate(selectedDateWithoutTime);
    } else {
      setSelectedDate(new Date());
    }
  };

  const handleSendMessage = () => {
    if (
      message.trim() === '' &&
      linkName.trim() === '' &&
      linkUrl.trim() === ''
    ) {
      return;
    }

    onSendMessage(
      message,
      selectedCeleb,
      linkName,
      linkUrl,
      selectedDate,
      bias,
      bgColor,
    );
    setMessage('');
    setLinkName('');
    setLinkUrl('');
  };

  const menu = (
    <Menu onClick={handleSenderClick}>
      {celebs?.map((celeb) => (
        <Menu.Item key={celeb.id}>
          <Avatar src={celeb.avatar} alt={celeb.name} />
          {celeb.name}
          <span style={{ marginLeft: '8px', color: '#999' }}>
            {celeb.description}
          </span>{' '}
          {/* description 표시 */}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
      >
        <Dropdown overlay={menu}>
          <Button>
            <Avatar src={selectedCeleb?.avatar} alt={selectedCeleb?.name} />{' '}
            {selectedCeleb?.name}
          </Button>
        </Dropdown>
        <Radio.Group
          value={bias}
          onChange={handleBiasChange}
          style={{ marginLeft: '8px' }}
        >
          <Radio.Button value={Bias.LEFT}>Left</Radio.Button>
          <Radio.Button value={Bias.CENTER}>Center</Radio.Button>
          <Radio.Button value={Bias.RIGHT}>Right</Radio.Button>
        </Radio.Group>
        <Radio.Group
          value={bgColor}
          onChange={handleBgColorChange}
          style={{ marginLeft: '8px' }}
        >
          <Radio.Button style={{ backgroundColor: '#f5f5f5' }} value="#f5f5f5">
            f5f5f5
          </Radio.Button>
          <Radio.Button style={{ backgroundColor: '#eff6ff' }} value="#eff6ff">
            eff6ff
          </Radio.Button>
          <Radio.Button style={{ backgroundColor: '#fef2f2' }} value="#fef2f2">
            fef2f2
          </Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ display: 'flex', marginBottom: '8px' }}>
        <Input
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
          placeholder="링크 이름"
          style={{ flex: 1 }}
        />
        <Input
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          placeholder="링크 주소"
          style={{ flex: 1, marginLeft: '8px' }}
        />
        <DatePicker
          onChange={handleDateChange}
          value={dayjs(selectedDate)}
          format={dateFormat}
        />
        <TimePicker
          onChange={handleTimeChange}
          value={dayjs(selectedDate)}
          format={timeFormat}
        />
      </div>
      <div style={{ display: 'flex', marginBottom: '8px' }}>
        <Input.TextArea
          value={message}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
          autoSize={{ minRows: 1, maxRows: 6 }}
        />
        <Button onClick={handleSendMessage} style={{ marginLeft: '8px' }}>
          메시지 등록하기
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;

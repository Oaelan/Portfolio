'use client';
import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

interface TypingProps extends React.HTMLAttributes<HTMLDivElement> {
  texts: string[];
  speed: number;
  delay: number;
  loop: boolean;
  cursor?: boolean;
  cursorSpeed?: number;
}

export default function Typing({
  texts,
  speed,
  delay,
  loop,
  cursor = true,
  cursorSpeed = 500,
  className,
}: TypingProps) {
  const [displayText, setDisplayText] = useState(''); //화면에 보일 텍스트
  const [currentTextIndex, setCurrentTextIndex] = useState(0); //현재 텍스트 인덱스
  const [currentCharIndex, setCurrentCharIndex] = useState(0); //현재 문자 인덱스
  const [isTyping, setIsTyping] = useState(true); //타이핑 상태
  const [showCursor, setShowCursor] = useState(cursor); //커서 상태

  //커서 효과
  useEffect(() => {
    if (!cursor) return;
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorSpeed);
    return () => clearInterval(timer);
  }, [cursor, cursorSpeed]);

  //타이핑 효과
  useEffect(() => {
    // 현재 텍스트 가져오기
    const getCurrentText = () => texts[currentTextIndex];

    // 다음 텍스트로 이동
    const moveToNextText = () => {
      setCurrentTextIndex((prev) => {
        const next = prev + 1;
        if (next >= texts.length) {
          if (loop) {
            setCurrentCharIndex(0);
            setDisplayText('');
            return 0;
          } else return prev;
        }
        setCurrentCharIndex(0);
        return next;
      });
      setIsTyping(true);
    };

    // 현재 문자 타이핑
    const typeCurrentChar = () => {
      const text = getCurrentText();
      if (text && currentCharIndex < text.length) {
        setDisplayText((prev) => prev + text[currentCharIndex]); // 현재 문자 추가
        setCurrentCharIndex((prev) => prev + 1); // 현재 문자 인덱스 증가
      } else {
        setIsTyping(false);
      }
    };

    if (isTyping) {
      // 타이핑 중일 때: 현재 문자 타이핑
      const timer = setTimeout(typeCurrentChar, speed);
      return () => clearTimeout(timer);
    } else {
      // 일시정지 중일 때: 다음 텍스트로 이동
      const timer = setTimeout(moveToNextText, delay);
      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentTextIndex, isTyping, texts, speed, delay, loop]);

  return (
    <div className={cn('text-2xl font-bold h-fit whitespace-pre-line', className)}>
      {displayText}
      <span className={`transition-opacity duration-75 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </div>
  );
}

import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import useButtonAnctions from '../../../hooks/useButtonActions';
import TopImage from '../../../images/top_image.png';
import Button from '../../Button/Button';

const Body: VFC = () => {
  const { blankAntion } = useButtonAnctions();
  const subTitleStyles: string = 'mt-5 font-bold';
  const buttonStyles: string =
    'bg-green-600  text-white mt-10 py-3 px-10 font-semibold rounded-lg shadow-md focus:outline-none';

  return (
    <div className="mt-5 w-9/12  mx-auto">
      <div className="text-center mt-20 text-[48px] font-extrabold">
        仕事もプライベートもなんとなく整理
      </div>
      <div className="text-center mt-3 font-medium text-[24px]">
        <p>ノートがひとつにまとめられるので、</p>
        <p>情報の記憶と目標の実現がちょっと加速します。</p>
      </div>
      <div className="text-center">
        <Button className={buttonStyles} buttonAction={blankAntion}>
          無料で新規登録
        </Button>
      </div>
      <Link
        to="/login"
        className=" w-[18rem] block mt-5 mx-auto  decoration-black hover:text-green-500 max-w-9/12 text-center underline hover:decoration-green-500"
      >
        アカウントをお持ちですか？ ログイン
      </Link>
      <div className="flex my-10">
        <img src={TopImage} alt="topImage" className="hidden xl:block" />
        <div className="">
          <p className={subTitleStyles}>どこにいても作業はできない</p>
          <p>
            ノートはご利用の全端末で自動的に同期する機能はありません、重要な情報は保存しないことをお勧めしす。
          </p>
          <p className={subTitleStyles}>すべては記憶できない</p>
          <p>
            ノートにはテキストだけです。画像、音声、スキャン、PDF、文書ファイルを追加できません。
          </p>
          <p className={subTitleStyles}>「ToDo」の機能はありません</p>
          <p>
            ノート、タスク、スケジュールをまとめて管理できません。今やるべきことが明確になり行動に移しやすくなるかは、あなた次第です。
          </p>
          <p className={subTitleStyles}>検索は自力で</p>
          <p>
            強力かつ柔軟な検索機能で、必要な情報を必要な時に素早く見つけられます
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;

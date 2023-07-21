export type Career = {
  term: string
  companyName: string
  description: string
}

export const careers: Career[] = [
  {
    term: '2023/04~2025/03(予定)',
    companyName: '長岡技術科学大学院 防災復興システム工学研究室',
    description: '車載LiDARから取得した3次元点群情報のノイズ除去に関する研究を行っています'
  },
  {
    term: '2022/04~',
    companyName: '株式会社スタイルアーツ',
    description: '受注システムの開発・Reactを用いたwebアプリケーションの開発を行っています'
  },
  {
    term: '2022/11~2023/03',
    companyName: '株式会社KUNO',
    description:
      '長期インターンでGoogleCloudと機械学習について学んでいました。業務ではpythonを使用して機械学習のデータクレンジングを行っていました'
  },
]

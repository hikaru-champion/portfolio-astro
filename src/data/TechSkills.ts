export type TechSkillItem = {
  name: string,
  image: string,
  type: string,
  description: string
}

export const techSkills: TechSkillItem[] = [
  {
    name: 'Python',
    image: 'python.png',
    type: 'language',
    description: 'AWS及びGoogle Cloud内で利用する自動化スクリプトで使用。'
  },
  {
    name: 'TypeScript',
    image: 'typescript.png',
    type: 'language',
    description: '個人開発のフロントエンド・バックエンドで利用。絶賛勉強中。'
  },
  {
    name: 'Bash',
    image: 'bash.png',
    type: 'language',
    description: 'サーバ内の自動化スクリプト・バッチ処理で利用。'
  },
  {
    name: 'AWS',
    image: 'aws.png',
    type: 'cloud',
    description: '顧客データ蓄積基盤、顧客ユーザ管理基盤、受注管理基盤をECSを利用し作成。CodeシリーズでのCICDの構築も経験。'
  },
  {
    name: 'Google Cloud',
    image: 'googlecloud.png',
    type: 'cloud',
    description: 'プロジェクトの払い出しから技術サポートまで対応。コスト最適化やガイドライン、各種サービスのデザインパターンの作成。'
  },
  {
    name: 'Cloudflare',
    image: 'cloudflare.png',
    type: 'cloud',
    description: '個人サイトのホスティングや、ドメイン管理で利用。最近利用し始めたのでまだまだ勉強中。'
  },
  {
    name: 'Docker',
    image: 'docker.png',
    type: 'infra',
    description: 'コンテナベースの開発推進のため利用。dockerファイルの作成から担当。'
  },
  {
    name: 'Kubernetes',
    image: 'kubernetes.png',
    type: 'infra',
    description: 'アプリケーション基盤で利用しているGKEの構築・運用・保守を担当。'
  },
  {
    name: 'Terraform',
    image: 'terraform.png',
    type: 'infra',
    description: 'AWS、Google Cloud等のクラウドサービスの構成管理で利用。社内へのTerraform勉強会の開催やチーム内へのスキルトランスファーを開催。'
  },
  {
    name: 'Ansible',
    image: 'ansible.png',
    type: 'infra',
    description: 'サーバ内のミドルウェアのインストールや、セットアップで利用。'
  },
  {
    name: 'Packer',
    image: 'packer.png',
    type: 'infra',
    description: 'AWSのEC2のゴールデンイメージ作成のために利用。'
  },
  {
    name: 'Git',
    image: 'git.png',
    type: 'tool',
    description: 'ソースコードバージョン管理とgithub actionsでのCICDで利用。'
  },
  {
    name: 'Nginx',
    image: 'nginx.png',
    type: 'infra',
    description: 'Webサーバやリバースプロキシとして利用。'
  },
  {
    name: 'Fluentd',
    image: 'fluentd.png',
    type: 'infra',
    description: 'サーバ内のログをS3やCloudWatchへ転送するために利用。'
  },
  {
    name: 'Zabbix',
    image: 'zabbix.png',
    type: 'infra',
    description: '死活監視、ログ監視、モニタリングツールとして利用。'
  },
  {
    name: 'Keycloak',
    image: 'keycloak.png',
    type: 'infra',
    description: 'ECサイトのユーザ認証基盤として利用。'
  },
  {
    name: 'Linux',
    image: 'linux.png',
    type: 'infra',
    description: 'Ubuntu、CentOS、AlmaLinux、LockyLinux、RedHat、Amazon Linux2のディストリビューションを経験。'
  },
  {
    name: 'PostgreSQL',
    image: 'postgressql.png',
    type: 'infra',
    description: 'RDS・Auroraともに設計から構築・運用・保守まで実施。'
  },
  {
    name: 'Datadog',
    image: 'datadog.png',
    type: 'tool',
    description: 'モニタリングダッシュボードの作成、ログ分析、アラートの作成、Google Cloudとのインテグレーションが可能。'
  }
]
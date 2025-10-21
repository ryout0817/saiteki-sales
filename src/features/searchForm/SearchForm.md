# 検索フォームコンポーネント (`SearchForm.tsx`)

## 1. 概要
案件情報を絞り込むための検索フォーム
案件一覧ページの左部に配置する

## 2. UI要素

(1)フォームを構成する項目を定義します

| 項目ラベル | 入力形式 | 選択肢の例 (ドロップダウン等) | 初期値 | プレースホルダーのテキスト | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| フリーワード | テキスト入力 | (なし) | (空文字列) | フリーワード | UI上、ラベルは非表示 |
| 言語 | テキスト入力 ||| 例)Java Ruby ||
| 単価 | テキスト入力 | (なし) | (空文字列) | 万円 | 下限用 |
| 単価 | テキスト入力 | (なし) | (空文字列) | 万円 | 上限用 |
| 場所 | テキスト入力| (なし) | (空) | 例)品川駅 |
| 年齢 | テキスト | ... | ... | 歳 | 年齢下限用 |
| 年齢 | テキスト | ... | ... | 歳 | 年齢上限用 |
| 稼働開始 | テキスト | ... | ... | 年 / 月 / 日 |
| リモート可否 | ドロップダウン | `search-form-list.ts`の`REMOTE_OPTIONS`を参照 || 選択してください |

<!-- ## 3. Props(今はテスト中のため読み込まない)
| Prop名 | 型 | 説明 |備考|
| :--- | :--- | :---|
| `onSearch` | `(searchConditions: object) => void` | 検索ボタンが押された時に、入力された検索条件を引数として実行されるコールバック関数。 ||
| `initialValues` | `object` | (任意) フォームの初期値を外部から与えたい場合に使用する。 || -->

## 4. 定数定義
コンポーネント内で使用する定数を定義します

  (1)リモート可否オプション
  ファイルパス: `src/features/searchForm/search-form-list.ts`
  定数名: `REMOTE_OPTIONS`
  内容: リモート可否のドロップダウンリストの選択肢を定義した配列。以下のように選択肢を定義。
  | 値 | value名 |
  | :--- | :--- |
  | 選択してください(プレースホルダー) | '' |
  | フルリモート | full_remote |
  | 基本リモート | basic_remote |
  | 一部リモート | partial_remote |
  | 常駐 | on_site |

## 5. 状態管理: カスタムフック
(1)`useSearchForm`
このコンポーネントの状態管理は、カスタムフック **`useSearchForm`** に集約する
このフックは、フォームの全ての状態と、それらを操作するためのロジックを提供する。

### 5-1. フックが返す値
`useSearchForm` フックは、以下のキーを持つオブジェクトを返す。

| キー | 種別 | 説明 |
| :--- | :--- | :--- |
| `freeWord` | `string` | フリーワード入力の現在の値。 |
| `setFreeWord` | `React.Dispatch<React.SetStateAction<string>>` | `freeWord` の値を更新する関数。 |
| `language` | `string` | 言語入力の現在の値。 |
| `setLanguage` | `React.Dispatch<React.SetStateAction<string>>` | `language` の値を更新する関数。 |
| `minPrice` | `string` | 単価（下限）入力の現在の値。 |
| `setMinPrice` | `React.Dispatch<React.SetStateAction<string>>` | `minPrice` の値を更新する関数。 |
| `maxPrice` | `string` | 単価（上限）入力の現在の値。 |
| `setMaxPrice` | `React.Dispatch<React.SetStateAction<string>>` | `maxPrice` の値を更新する関数。 |
| `location` | `string` | 場所入力の現在の値。 |
| `setLocation` | `React.Dispatch<React.SetStateAction<string>>` | `location` の値を更新する関数。 |
| `minAge` | `string` | 年齢（下限）入力の現在の値。 |
| `setMinAge` | `React.Dispatch<React.SetStateAction<string>>` | `minAge` の値を更新する関数。 |
| `maxAge` | `string` | 年齢（上限）入力の現在の値。 |
| `setMaxAge` | `React.Dispatch<React.SetStateAction<string>>` | `maxAge` の値を更新する関数。 |
| `startDate` | `string` | 稼働開始日入力の現在の値。 |
| `setStartDate` | `React.Dispatch<React.SetStateAction<string>>` | `startDate` の値を更新する関数。 |
| `remote` | `string` | リモート可否選択の現在の値。 |
| `setRemote` | `React.Dispatch<React.SetStateAction<string>>` | `remote` の値を更新する関数。 |
| `handleClearFilter` | `function` | 全ての入力値を空文字列（""）にリセットする関数。 |

### 5-2. フック内部の処理の定義
フックから返される関数や、フック内部で完結する処理の具体的な仕様をここに定義します。

*   **`handleClearFilter` 関数**
    *   **役割:** フォームの全入力内容をリセットする。
    *   **トリガー:** コンポーネント側（UI）から、`return` されたこの関数が呼び出される。
    *   **具体的な処理:**
        1.  `setFreeWord('')` を呼び出す。
        2.  `setLanguage('')` を呼び出す。
        3.  （...以下、管理している全ての `set` 関数を空文字列で呼び出す）

*   **(将来的な処理の例) データ整形処理**
    *   **役割:** 検索実行前に、入力データをAPIに適した形式に変換する。
    *   **トリガー:** 検索ボタンが押されたときに呼び出される `handleSearch` 関数（仮）の内部。
    *   **具体的な処理:**
        1.  `minPrice` や `maxPrice` に「万円」などの文字列が含まれていれば取り除き、数値に変換する。
        2.  `startDate` が日付形式でなければ、`YYYY-MM-DD` 形式にフォーマットする。

## 6. アクションの定義
`useSearchForm` フックから受け取った値と関数を使い、以下のUIを構築する際の、ボタン等のアクションを定義する。

*   **クリアボタン:**
    *   `onClick` で `handleClearFilter` を呼び出す。
*   **検索ボタン:**
    <!-- *   `onClick` で、現在の全Stateをオブジェクトにまとめ、Propsで受け取った `onSearch` を呼び出す。 -->

## 7. スタイリング
スタイリングには **Tailwind CSS** を利用する

一貫性の保持と管理の容易さのため、複数のユーティリティクラスを組み合わせたものは `src/styles/styleConstants.ts` のような共通ファイルに `const` 変数として定義し、各コンポーネントからインポートして利用します。

### 7-1. スタイル定義のルール
コンポーネントで使用するスタイル変数は、以下の形式で定義します。

| 変数名 | Tailwind CSS クラス |
| :--- | :--- |
| `INPUT_BASE_CLASS` | `"bg-gray-50 border border-gray-300 rounded text-sm h-8 box-border"` |

### 7-2. 主要な要素のスタイリング

| 要素の役割/コンテキスト | 適用するTailwind CSS クラス |
| :--- | :--- |
| 検索フォーム全体を囲むコンテナ | `bg-white w-64 h-[512px] flex flex-col m-4 p-4 shadow-lg` |
| 言語入力フィールド | `w-full p-2` |
| 単価（下限）入力フィールド | `w-full text-center p-1` |
| 単価（上限）入力フィールド | `w-full text-center p-1` |
| 場所 | `w-full p-2` |
| 年齢（下限）入力フィールド | `w-full text-center p-1` |
| 年齢（上限）入力フィールド | `w-full text-center p-1` |
| 稼働開始入力フィールド | `w-full p-2` |
| リモート可否ドロップダウン | `w-full mt-1 p-2 text-gray-500 h-10` |

## 8. コーディング規約

### 8-1. import文の順序

すべての `import` 文は、ファイルの先頭にまとめて記述する必要があります。他の変数定義やロジックよりも前に記述してください。このルールは、ESLint の `import/first` ルールによって自動的にチェックされます。



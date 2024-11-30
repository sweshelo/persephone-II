import { StyleSheet, View } from "react-native"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';

interface HistoryTableProps {
  histories: ({
    id: number
    date: string
    points: number
    diff: number
    karma: number
  })[]
}

export const HistoryTable = ({ histories }: HistoryTableProps) => {
  return (
    <View className="bg-white rounded-lg shadow my-2">
      <Table>
        <Row data={['日時', '累計', '推定', '']} flexArr={[3, 3, 2, 2]} style={styles.head} textStyle={styles.text}/>
        <Rows data={histories.map(history => [history.date, history.points, history.diff, history.karma])} flexArr={[3, 3, 2, 2]} style={styles.row} textStyle={styles.text}/>
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: 'orange', borderTopLeftRadius: 8, borderTopRightRadius: 8, },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 35, borderBottomColor: '#eee', borderBottomWidth: 1 },
  text: { textAlign: 'center' }
});
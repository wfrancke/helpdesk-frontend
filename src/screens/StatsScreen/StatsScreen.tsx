import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  useOverallQuantityStatsQuery,
  useOverallSpeedStatsQuery,
  useQuantityStatsQuery,
  useSpeedStatsQuery
} from '../../api/tickets/tickets'
import { StatsTable } from '../../components/data/StatsTable/StatsTable'
import * as Styled from './StatsScreen.styles'

export const StatsScreen = () => {
  const { t } = useTranslation()

  const { data: openOverallData } = useOverallQuantityStatsQuery('open')
  const { data: openLowData } = useQuantityStatsQuery('open', 'low')
  const { data: openHighData } = useQuantityStatsQuery('open', 'high')
  const { data: openCriticalData } = useQuantityStatsQuery('open', 'critical')

  const { data: closedOverallData } = useOverallQuantityStatsQuery('closed')
  const { data: closedLowData } = useQuantityStatsQuery('closed', 'low')
  const { data: closedHighData } = useQuantityStatsQuery('closed', 'high')
  const { data: closedCriticalData } = useQuantityStatsQuery('closed', 'critical')

  const { data: speedOverallData } = useOverallSpeedStatsQuery()
  const { data: speedLowData } = useSpeedStatsQuery('low')
  const { data: speedHighData } = useSpeedStatsQuery('high')
  const { data: speedCriticalData } = useSpeedStatsQuery('critical')

  return (
    <Styled.RootContainer>
      <Styled.ColumnContainer>
        <StatsTable data={openOverallData || []} title={t('stats.openOverall')}/>
        <StatsTable data={openLowData || []} title={t('stats.openLow')}/>
        <StatsTable data={openHighData || []} title={t('stats.openHigh')}/>
        <StatsTable data={openCriticalData || []} title={t('stats.openCritical')}/>
      </Styled.ColumnContainer>
      <Styled.ColumnContainer>
        <StatsTable data={closedOverallData || []} title={t('stats.closedOverall')}/>
        <StatsTable data={closedLowData || []} title={t('stats.closedLow')}/>
        <StatsTable data={closedHighData || []} title={t('stats.closedHigh')}/>
        <StatsTable data={closedCriticalData || []} title={t('stats.closedCritical')}/>
      </Styled.ColumnContainer>
      <Styled.ColumnContainer>
        <StatsTable data={speedOverallData || []} title={t('stats.speedOverall')}/>
        <StatsTable data={speedLowData || []} title={t('stats.speedLow')}/>
        <StatsTable data={speedHighData || []} title={t('stats.speedHigh')}/>
        <StatsTable data={speedCriticalData || []} title={t('stats.speedCritical')}/>
      </Styled.ColumnContainer>
    </Styled.RootContainer>
  )
}
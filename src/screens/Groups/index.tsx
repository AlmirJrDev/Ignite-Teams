
import { FlatList } from 'react-native';
import { useState } from 'react';
import * as S from './styles';

import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([ ]);
  return (
    <S.Container>
    <Header />
    <Highlight
      title='Turmas'
      subtitle='Jogue com a sua turma'
    />
    <FlatList
      data={groups}
      keyExtractor={item => item}
      renderItem={({ item }) => (
       <GroupCard 
          title={item} 
        />
       )}  
       contentContainerStyle={groups.length === 0 && {flex: 1}}
       ListEmptyComponent={() => (
       <ListEmpty
        message='Que tal cadrastar a primeira turma?'
        />
       )}
    />

    <Button 
      title="Criar nova turma"
    />
    </S.Container>
  );
}



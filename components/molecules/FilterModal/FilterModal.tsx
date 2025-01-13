import React, { useEffect, useState } from "react";
import { Modal, Pressable, View, Text, TouchableOpacity } from "react-native";

import { useAppTheme } from "@constants/theme";
import {
  ApplyButton,
  ApplyText,
  ButtonView,
  ClearButton,
  ClearText,
  FilterBtn,
  FilterName,
  FilterView,
} from "./FilterModal.style";

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (option: string) => void;
  onClear: () => void;
  selectedFilter: string;
  filters: { label: string; value: string }[];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onApply,
  onClear,
  selectedFilter,
  filters,
}) => {
  const { colors } = useAppTheme();
  const [localFilter, setLocalFilter] = useState(selectedFilter);

  useEffect(() => {
    setLocalFilter(selectedFilter);
  }, [selectedFilter]);

  const handleApply = () => {
    onApply(localFilter);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={onClose}
      />
      <FilterView>
        <FilterName>Sort By</FilterName>
        {filters.map((filter) => (
          <FilterBtn
            key={filter.value}
            onPress={() => setLocalFilter(filter.value)}
          >
            <FilterName
              style={{
                color:
                  localFilter === filter.value ? colors.main : colors.black,
              }}
            >
              {filter.label}
            </FilterName>
          </FilterBtn>
        ))}
        <ButtonView>
          <ClearButton onPress={onClear}>
            <ClearText>Clear</ClearText>
          </ClearButton>
          <ApplyButton onPress={handleApply}>
            <ApplyText>Apply</ApplyText>
          </ApplyButton>
        </ButtonView>
      </FilterView>
    </Modal>
  );
};

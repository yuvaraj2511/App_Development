package com.bytebrawlers.feedback.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bytebrawlers.feedback.dto.request.FeedbackRequest;
import com.bytebrawlers.feedback.dto.response.FeedbackResponse;
import com.bytebrawlers.feedback.model.Feedback;
import com.bytebrawlers.feedback.repository.FeedbackRepository;
import com.bytebrawlers.feedback.service.FeedbackService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public boolean saveFeedback(FeedbackRequest request) {
        if (feedbackRepository.findByUsernameAndUseremail(request.getUname(),
                request.getUemail()).isPresent()) {
            return false;
        }

        var feedback = Feedback.builder()
                .username(request.getUname())
                .useremail(request.getUemail())
                .question(request.getQuestion())
                .answer(request.getAnswer())
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setQuestion(feedback.getQuestion());
                    response.setAnswer(feedback.getAnswer());
                    return response;
                })
                .collect(Collectors.toList());
    }
}

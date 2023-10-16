package com.bytebrawlers.feedback.service;

import java.util.List;

import com.bytebrawlers.feedback.dto.request.FeedbackRequest;
import com.bytebrawlers.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
